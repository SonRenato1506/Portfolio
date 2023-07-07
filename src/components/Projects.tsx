import { HiArrowTopRightOnSquare } from "react-icons/hi2"

export function Projects() {
    const projects = [
        {
            title: "Renato Notes",
            description: "Um projeto de anotações, ultilizando React.JS, Node e JavaScript",
            image: "https://sonrenato1506.github.io/Site-Renato/Img/RenatoNotes.png",
            link: "https://renatonotes.netlify.app/",
            colSpan: "col-span-1 md:col-span-2"
        },
        {
            title: "Projeto Cordel",
            description: "Um projeto de um cordel, utilizando HTML e CSS",
            image: "https://sonrenato1506.github.io/Site-Renato/Img/ProjetoCordel.png",
            link: "https://sonrenato1506.github.io/Projeto-Cordel/",
            colSpan: "col-span-1"
        },
        {
            title: "Projeto Android",
            description: "Um projeto sobre a história do Android, utilizando HTML e CSS",
            image: "https://sonrenato1506.github.io/Site-Renato/Img/ProjetoAndroid.png",
            link: "https://sonrenato1506.github.io/Curso-em-video/desafios/desafio10/Guanabara/android.html",
            colSpan: "col-span-1"
        },
        {
            title: "Meus gostos",
            description: "Um projeto com os meus gostos de filmes, series e livros, utilizando HTML e CSS",
            image: "https://sonrenato1506.github.io/Site-Renato/Img/Meusgostos.png",
            link: "https://sonrenato1506.github.io/nlw-esports/index2.html",
            colSpan: "col-span-1 md:col-span-2"
        },
        {
            title: "Projeto social",
            description: "Um projeto com o celular e as redes sociais, utilizando HTML e CSS",
            image: "https://sonrenato1506.github.io/Site-Renato/Img/Projetoredessociais.png",
            link: "https://sonrenato1506.github.io/Projeto-social/",
            colSpan: "col-span-1"
        },
        {
            title: "Focus Timer",
            description: "Um projeto de cronômetro, utilizando HTML, CSS e Javascript",
            image: "https://sonrenato1506.github.io/Site-Renato/Img/FocusTimer.png",
            link: "https://sonrenato1506.github.io/Explorer-renato/exercicios-das-aulas/explorer5.1/focusTimer/",
            colSpan: "col-span-1"
        },
        {
            title: "Calculadora de IMC",
            description: "Um projeto de uma calculadora que calcula o IMC, utilizando HTML, CSS e JavaScript",
            image: "https://sonrenato1506.github.io/Site-Renato/Img/CalculadoradeIMC.png",
            link: "https://sonrenato1506.github.io/Explorer-renato/exercicios-das-aulas/explorer5.1/imc/",
            colSpan: "col-span-1"
        },
    ]
    return (

        <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]"
        >
            <div className="container mx-auto max-2-4xl p-4 py-12">
                <div className="relative p-4 text-center">
                    <h2 className="relative z-50 mb-2 text-white">
                        <span className="mr-2 font-headline text-3xl font-semibold">
                            Projetos &
                        </span>
                        <span className="font-handrwriting text-4xl">Portfólio</span>
                    </h2>
                    <p className="relative text-sm text-gray-400">
                        Alguns projetos que eu ja realizeia ao longo da minha tragetória como programdor para web
                    </p>
                    <div className="absoulute left-1/2 top-3 z-0 h-10 w-10 rounded-full bg-blue-400/10" />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                            style={{ backgroundImage: `url('${project.image}')` }}
                            key={`project-${index}`}
                        >
                            <div className="absoulute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                                <h4 className="font-headline text-lg font-semibold">
                                    {project.title}
                                </h4>
                                <p className="mb-4 text-sm">
                                    {project.description}
                                </p>
                                <a href={project.link} target="_blank">
                                    <HiArrowTopRightOnSquare className="h-6 w-6"/>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}