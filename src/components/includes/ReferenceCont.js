import React from 'react';
import {Link} from 'react-router-dom';

function RefTable({id, title, desc}){
    return (
        <>
            <tr>
                <th>{id}</th>
                <th>{title}</th>
                <td>
                <Link to={{
                    pathname : "/refer-detail",
                    state: {id, title, desc},
                }}>
                    {desc.slice(0,180)}
                </Link>
                </td>
            </tr>
        </>
    )
}


function ReferenceCont(props) {
  return (
    <section className={`reference__cont ${props.color}`}>
        <div className='container'>
            <div className="reference__inner">
                <div className='reference'>
                    <h3>CSS REFERENCE</h3>                    
                    <table>
                        <colgroup>
                            <col style={{width: "10%"}}/>
                            <col style={{width: "20%"}}/>
                            <col style={{width: "70%"}}/>
                        </colgroup>
                        <tbody>
                            {props.refer.map(refers=>(
                                <RefTable 
                                id={refers.id}
                                title={refers.title}
                                desc={refers.desc}
                                key={refers.id}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ReferenceCont