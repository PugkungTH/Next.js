export  default function Footer({txt}: {txt: string}) {
    return (
        <footer>
            <p dangerouslySetInnerHTML={{__html: txt}}></p>
        </footer>
    );
}