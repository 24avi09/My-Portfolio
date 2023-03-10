import React from 'react'

const Testimonial = () => {
    return (
        <div id='testimonial' >
            <h2>Testimonial</h2>
            <section>
                <TestimonialCard
                    img="https://media.licdn.com/dms/image/C4D03AQGejMXN0Ka1CQ/profile-displayphoto-shrink_100_100/0/1659064067101?e=1677715200&v=beta&t=POXgB94ZDJuSrbFaFFKM8bEmzSOK_Cl-qYpzbab-w58"
                    name={"Er. Abu Hanzala Rehan Ansari"}
                    feedback={"Your logical thinking, positive attitude and strong work ethic makes you an asset to a team. You are excellent coder with a great personality and a valuable contributor to a project."}
                    designation={"Software Development Engineer at KYC Hub"}
                />
                <TestimonialCard
                    img="https://avatars.githubusercontent.com/u/61613218?s=400&u=1d4bdce8adfca32dc06e2db0975d4585e0ad2304&v=4"
                    name={"Prince Soni"}
                    feedback={"You are skillfull coder with a strong understanding of a range of programming languages. You have a friendly, approachable nature, and team player who values the input of others and actively contributes to the success of projects."}
                    designation ={"Teaching Assistant at Function Up"}
                />
            </section>
        </div>
    )
};

const TestimonialCard = ({ img, name, feedback, designation }) => (
    <article>
        <img
            src={img}
            alt="User"
        />
        <h4>{name}</h4>
        <p>{feedback}</p>
        <h5>{designation}</h5>
    </article>
)

export default Testimonial