import React, {useState} from "react";

const Employee = () => {
    const [userDetail, setUserDetail] = useState({
        name :" ",
        department :" ",
        rating :" "
    })

    const [record, setRecord] = useState([])

    const handleInputData = (data) => {
        const name = data.target.name
        const value = data.target.value
        setUserDetail({...userDetail, [name]:value})
    }

    const handleSubmit = (data) => {
        data.preventDefault()
        setRecord([...record, userDetail])
    }

    return(
        <div >
            <div ><h1>EMPLOYEE FEEDBACK FORM</h1></div>

            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label className="lb"> Name : </label>
                    <input type="text" name="name" className="input" value={userDetail.name} onChange={handleInputData}/>
                </div>
                <div>
                    <label className="lb"> Department : </label>
                    <input type="text" name="department" className="input" value={userDetail.department} onChange={handleInputData}/>
                </div>
                <div>
                    <label className="lb"> Rating : </label>
                    <input type="number" name="rating" className="input" value={userDetail.rating} onChange={handleInputData}/>
                </div>
                <button type="submit" className="btn"> Submit Here </button><br/>
            </form>

            <div className="box-display">
                {
                    record.map((crntElement)=>{
                        return(
                            <div className="box">
                                Name : {crntElement.name} | Department : {crntElement.department} | Rating : {crntElement.rating}
                            </div>
                        )
                    })
                }
            </div>
        </div>    
    )
}
export default Employee;