function Card()
{
    let items=[{img:"https://i.pcmag.com/imagery/roundups/05VXLlOuCyvq8fQnl6W3xsc-32..v1638904093.jpg",title:"Camera",para:"This is a camera"},
    {img:"https://5.imimg.com/data5/SELLER/Default/2023/3/YM/SG/XZ/183519203/kawasaki-z900-2023-super-naked.jpg",title:"Bike",para:"This  is a bike"},
    {img:"https://static.toiimg.com/photo/80387978.cms",title:"Car ",para:"This is a car "},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXT_CfjXEcQTEz6DD_UwDvPMJYXa4mff__KQ&s",title:" i phone ",para:"This is a i phone "},
    {img:"https://www.digitaltrends.com/wp-content/uploads/2021/11/macbook-pro-2021-16.jpg?fit=1500%2C1000&p=1",title:"Laptop ",para:"This is a laptop "}]
    return(
        <>
         {items.map((item,index)=>(  <div className="card" style={{ width: "18rem" }}>
  <img src="items.img" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">
      {item.para}
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>))}
        
        </>
    )
}
export default Card;