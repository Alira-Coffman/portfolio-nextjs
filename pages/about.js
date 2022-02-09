import Layout from "../components/Layout";
import Image from "next/image";
export default function About() {
    return(
        <Layout>
            <div className="container my-5">
                <div className="d-flex justify-content-center">
                    <Image src='/header.png' layout="fixed" width={450} height={250} alt='banner image' ></Image>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <h1>Software <span className="red-text">Engineer</span>, Lifelong <span  className="red-text">Learner</span>, Bug <span className="red-text">Crusher</span></h1>
                </div>
                
            </div>
            <hr className="bg-secondary"/>
            <div className="container align-items-center">
                <h1 className="d-flex justify-content-center red-text fs-1 my-2">ABOUT</h1>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <div className="d-flex flex-column">
                            <h1 className="red-text large-text">7+</h1>
                            <h3>years of <span className="red-text">experience</span></h3>
                        </div>
                        
                    </div>
                    <div className="col d-flex justify-content-start mt-3">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores numquam tempora sequi veniam accusantium ducimus reprehenderit inventore accusamus ullam modi, laboriosam deserunt a nostrum magnam illo doloremque necessitatibus! Quos, eius! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi perspiciatis tempore animi dolorum, ipsum soluta libero modi cupiditate distinctio voluptas officia, atque qui itaque, ipsam impedit debitis dignissimos ad? Alias? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis odio nostrum consectetur ad mollitia nisi quo eaque voluptatibus libero. Culpa temporibus facilis atque repellendus ullam. Quo illo expedita ipsam magnam.</p>
                    </div>
                </div>
                <h1 className="d-flex justify-content-center mt-4">Software <span className="red-text">Engineer</span>, Lifelong <span  className="red-text">Learner</span>, Bug <span className="red-text">Crusher</span></h1>

            </div>
        </Layout>
    )
}