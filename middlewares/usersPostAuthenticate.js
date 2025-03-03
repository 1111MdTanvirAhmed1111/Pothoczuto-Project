const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const usersPostAuthenticate = async (req, res, next) => {
    try {
       

        const postId = req.params.postId;
        const post = await prisma.post.findUnique({
            where: { id: postId },
        });

        if (!post) {
            return res.status(404).send({ error: 'Post not found.' });
        }

        // Assuming 'author' is the field in your Post model; adjust if it's 'owner'
        if (post.author !== user.id) {
            return res.status(403).send({ error: 'Access denied. You do not own this post.' });
        }

        req.token = token;
        req.user = user;
        req.post = post;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

module.exports = usersPostAuthenticate;



