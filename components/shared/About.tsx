import Image from "next/image";

const About = () => {
  return (
    <div className="py-16 bg-gray-50/50 mt-10" id="about">
        <div className="w-[90%] mx-auto max-w-[1450px]">
            <h2 className="w-full text-center mb-10 text-2xl font-extrabold uppercase text-purple-600">
                About Us
                </h2>

                <div className="mt-5 w-full flex flex-col justify-center items-center">
                    <p className="leading-loose text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quibusdam numquam laborum impedit, asperiores incidunt reiciendis, veniam sed ducimus et nemo corrupti adipisci architecto non. Quisquam non ut sint omnis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque maxime magni illo perspiciatis autem dignissimos, blanditiis harum, debitis amet laudantium soluta voluptas, officiis dolor veniam architecto a! Dolorum, nesciunt optio?Lorem ipsum dolor sit amet consectetur adipisicing elit. In ducimus deserunt voluptates optio a? Eos sint, deserunt a quas cumque, nam illum odit magnam non illo, soluta voluptatibus consequuntur dicta Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis cumque esse neque rerum fugit sequi ipsa deserunt voluptatum excepturi. Explicabo doloremque hic dolorum sapiente eius, id numquam reiciendis voluptatem quaerat?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, dignissimos possimus? Fugiat ab eius beatae, explicabo necessitatibus, magnam placeat veritatis rerum dolorem deleniti consequuntur corrupti error sunt quaerat. Aliquam, commodi.
                    </p>

                    <Image
                    src={"/signature.png"} width={400} height={400}
                    alt="adex signature"
                     />
                </div>
        </div>
    </div>
  )
}

export default About;