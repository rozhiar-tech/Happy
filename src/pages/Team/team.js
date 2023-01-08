import React from "react"
import TeamCard from "./teamCard"
import zoriana from "./img/zoriana shatkovska.jpg"
import mhamad from "./img/mhamad raslan.jpg"
import rozhiar from "./img/rozhiar rashid.jpg"
import riham from "./img/riham zeidan.png"
import ramyar from "./img/ramyar omed ali.jpg"


const ourTeam = [
    {
        name: 'Rozhiar Rashid',
        photo: rozhiar,
        role: "FE Developer"
    },
    {
        name: 'Mhamad Raslan',
        photo: mhamad,
        role: "FE Developer"
    },
    {
        name: 'Zoriana Shatkovska',
        photo: zoriana,
        role: "FE Developer"
    },
    {
        name: 'Riham Zeidan',
        photo: riham,
        role: "FE Developer"
    },
    {
        name: 'Ramyar Omed Ali',
        photo: ramyar,
        role: "FE Developer"
    },
]


const Team = () => {
    return(
        <div className="mt-24 mb-36 max-w-6xl mx-auto px-4">
            <h1 className="md:text-4xl text-2xl mb-28 md:text-left  text-center">WE ARE CODING, NICE TO MEET YOU!</h1>
            <div>
                <h4 className="text-gray-600 text-lg md:text-2xl mb-12 md:text-left  text-center">Meet the Team!</h4>
            </div>
            <div className="md:flex md:flex-row md:justify-between md:mx-0 mx-4  grid grid-cols-2 lg:gap-0 md:gap-2 gap-4 justify-items-center mr-2 ">
                {ourTeam.map((person) => {
                    return(
                        <TeamCard key={person.name} photo={person.photo} name={person.name} role={person.role} />
                    )
                })}
            </div>
        </div>
    )
}

export default Team;