import React, { useEffect, useState } from 'react'

interface SchoolType {
    dbn: string;
    school_name: string
    overview_paragraph: string
}

// 

const NycSchools = () => {
    const [schoolData, setSchoolData] = useState<SchoolType[]>([])
    const [showOverView , setShowOverView] = useState(false)

    useEffect(() => {
        fetch('https://data.cityofnewyork.us/resource/s3k6-pzi2.json')
            .then((res) => res.json())
            .then((schoolDetails) => setSchoolData(schoolDetails as SchoolType[]))
    }, [])

    const displayOverview = ()  => {
        setShowOverView(true)
    }

    return (
        <div>
            <table>
                <tr>
                <td><h4>SCHOOL NAME</h4></td>   
                 <td><h4>DBN</h4></td>
                 {showOverView && <td><h4>OVERVIEW</h4></td> }
               </tr>
            {schoolData.map((school, key) => 
            <tr>
                <td data-testid="school-name" key={school.school_name} onClick={()  => displayOverview()}><u>{school.school_name}</u></td>
                <td data-testid="school-dbn">{school.dbn}</td>
                {showOverView && <td data-testid="school-overview">{school.overview_paragraph}</td>}
            </tr>
           
            )}
            </table>
        </div>
    )
}

export default NycSchools
