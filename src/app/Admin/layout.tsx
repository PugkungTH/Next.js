//Admin Layout
export default function AdminLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    return (
    <div style={{ border: "5px solid red", padding: "10px" }}>
        <h2>Admin Section</h2>
        {children}
    </div>
    );
}