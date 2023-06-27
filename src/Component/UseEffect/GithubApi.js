import React, { useState, useEffect } from 'react'

const GithubApi = () => {

    const [Users, setUsers] = useState([])


    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        setUsers(response.json());
    }


    useEffect(() => {
        getUsers();
    }, []);


    return (
        <div className="Container">
            <h1 className="text-center mt-5">Github api</h1>
            
               

                    {
                        Users?.map((curElem) => {
                            return (
                                <div className="col-10 col-md-4 mt-5 " key={curElem.id}>

                                    <div className="card p-4 ">


                                        <div className={curElem.title} >
                                            <img src={curElem.avatar_url} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{curElem.url}</h5>

                                                {/* <p className="card-foloowers">followers:
                                                <span>{}</span></p> */}

                                                <div className="ml-6 w-10">
                                                    <h4 className=" mb-0 mt-0 text-left">{curElem.documentation_url}</h4>
                                                    <span></span>

                                                    <div className="btn btn-sm btn-primary">Go somewhere</div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
           
      
    )
}



export default GithubApi