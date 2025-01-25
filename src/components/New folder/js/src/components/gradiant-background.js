export function GradientBackground({ children }) {
    return (<div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-300 to-purple-200 opacity-20"></div>
        <div className="relative">{children}</div>
      </div>);
}
