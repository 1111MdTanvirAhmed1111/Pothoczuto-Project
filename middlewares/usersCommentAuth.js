const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const usersCommentAuthenticate = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find user by ID and check if token exists in user's tokens array
        const user = await prisma.user.findFirst({
            where: {
                id: decoded._id,
                tokens: {
                    some: {
                        token: token,
                    },
                },
            },
        });

        if (!user) {
            throw new Error();
        }

        const comment = await prisma.comment.findUnique({
            where: { id: req.params.commentId },
        });

        if (!comment) {
            return res.status(404).send({ error: 'Comment not found' });
        }

        if (comment.createdBy !== user.id) {
            return res.status(403).send({ error: 'User not authorized to access this comment' });
        }

        req.user = user;
        req.comment = comment;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate' });
    }
};

module.exports = usersCommentAuthenticate;