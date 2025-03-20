import Link from "next/link";

export default function NotFound() {
 return(
    <div>
        Página 404 não encontrada!
        <p>Essa página não existe</p>
        <Link href="/">Voltar para a página inicial</Link>
    </div>
 )
}