//Member page with id parameter

export default function MemberPage (parameter: {params: {id: string}}) {
    const { id } = parameter.params;
    return (
        <div>
            <h1 className="text-2xl font-bold">Member Page{id}</h1>
        </div>
    );
}