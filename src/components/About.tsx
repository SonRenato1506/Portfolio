export function About() {
    return (
        <section className="container mx-auto my-4 max-w-5xl p-4">
            <div className=" relative p-4 text-center">
                <h2 className="relative text-blue-900 font-bold z-10">
                    <span className="mr-2 font-headline text-3xl">Sobre</span>
                    <span className="font-handwriting text-4xl">Mim</span>
                </h2>
                <p className="relative text-sm text-gray-600 z-10">
                    Tenho mais de 10 projetos executados e gostaria que o próximo seja o seu
                </p>
                <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40 " />
            </div>

            <div className="relative mx-auto mt-20 max-2-lg">
                <div className="relative w-full rounded-lg bg-blue-100 p-4 ps-20 md:h-64 md:ps-48">

                    <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
                        <p className="font-handrwriting text-lg font-bold">Olá,</p>
                        <p>
                            <span className="mr-1">Meu nome é</span>
                            <span className="font-headline font-bold uppercase text-blue-900">
                                Renato Matos
                            </span>
                        </p>

                        <table className="mt-4 w-full text-sm">
                            <tbody>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Idade:
                                    </td>
                                    <td>15</td>
                                </tr>

                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Celular:
                                    </td>
                                    <td>
                                        <a
                                            href="tel:+5513991558577"
                                            className="underline hover:text-blue-800">
                                            +15 13 99155-8577
                                        </a>
                                    </td>
                                </tr>


                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Email
                                    </td>
                                    <td>
                                        <a
                                            href="renato.matosoliv@gmail.com"
                                            className="underline hover:text-blue-800"
                                        >
                                            renato.matosoliv@gmail.com
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Endereço:
                                    </td>
                                    <td>
                                        <a
                                            href="https://www.google.com/maps/place/R.+Dr.+Antonio+Alves+Arantes,+157+-+Castelo,+Santos+-+SP,+11087-510/@-23.9485151,-46.3808183,3a,75y,258.86h,90t/data=!3m7!1e1!3m5!1s2Zb5pjPB9DqE58X-CPaJ5w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D2Zb5pjPB9DqE58X-CPaJ5w%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D258.8601%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m7!3m6!1s0x94ce1b5ded467a03:0x58fc5141b4bbe185!8m2!3d-23.948548!4d-46.3810009!10e5!16s%2Fg%2F11csnh9v_7?entry=ttu"
                                            target="_blank"
                                            className="underline hover:text-blue-800"
                                        >
                                           Jardim Castelo, Santos - SP, 11087-510
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Disponível:
                                    </td>
                                    <td>
                                        <span className="relative flex h-3 w-3">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75">
                                            </span>
                                            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                                        </span>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </div>

                    <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-[url(https://github.com/SonRenato1506.png)] bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56"></div>

                </div>

            </div>
        </section>
    )
}