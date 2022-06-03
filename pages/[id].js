import Airtable from 'airtable';
import Image from 'next/image'
let base = new Airtable({apiKey: process.env.airtableKey}).base(process.env.tfpBase);
let meta=[
    {
        "id":"cmd",
        "check":"tfp-command-line",
        "image":"cmd-badge"
    },
    {
        "id":"git",
        "check":"tfp-git-github",
        "image":"git-badge"
    }
]

export const getServerSideProps=async (context)=>{
    
    let user_id=context.params.id;
    let prom=new Promise((resolve,reject)=>{

        base('Primer').find(user_id,function(err, record) {
            let data={}
            data.name=record.get("Name")
            data.tags=[]
            if (err) { 
                resolve({
                    status:404
                })
            }
            meta.forEach((task)=>{
                console.log(task)
                let url=record.get(task.image)
                if(url==undefined){
                    url=null
                }
                data.tags.push({
                    id:task.id,
                    url:url
                })
            })
            resolve({
                status:200,
                data
            })
    
        })

    })
    
    let result= await prom.then(data=>{
        return data
    })
    
    console.log(result)
    return{
        props:result
    }


}

    
    

export default function User({status,data}) {
    console.log(data)
    if(status==200){
        return (
            <div>
                {data.name}
                {data.tags.map((item) => {
                    if(item['url']!=null){
                        console.log(item.url)
                        return <div key={item.id}><Image src={item.url} alt="badge" width={250} height={250} objectFit="contain"/></div>;

                    }
                })}
            </div>
        );
    }
    else{
        return(
            <div>
                Error!
            </div>
        )
    }
    
}