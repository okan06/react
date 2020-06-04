class Restaurant extends React.Component {
  render() {
    const restaurant = window.data.restaurant;
    const aktifMenu= restaurant.active_menu;
    return <div>
      <div>
        <img src="../images/logo.png"/>
      </div>
      
      <div> <h1> {restaurant.name}</h1></div>
      <div> <h3> {aktifMenu.menu_name}</h3></div>
       
       
    <div>
     

        <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">Arama Yap</span>
      </div>
      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Yemek Adına Göre" />
    </div>
    
    </div>
    <div>
    <nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">List</a>
    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Grid</a>
    
  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">    

  <div><label> {aktifMenu.menu.sections[0]} </label></div> 
   {/* var sections = aktifMenu.menu.sections.map((section, index) => {
      return (
        <div key={index}>
          <div>{section}</div>
          {aktifMenu.menu.map((menuler, i) =>
            section === menuler.section ? (
              <div className="card mb-3 shadow" key={i}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={
                          menuler.item.images[0]["200"] 
                      }
                      className="card-img meal-icon"
                      alt="..."
                      key={i}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="float-right">
                        <h5 className="card-title">{menuler.item.price}</h5>
                      </div>
                      <h5 className="card-title">{menuler.item.name}</h5>

                      <p className="card-text">
                        {menuler.item.ingredients.join(", ")}
                      </p>
                      <p className="card-text">
                        <small className="text-muted"></small>
                      </p>
                      <div className="float-right">
                        <button className="btn btn-outline-danger">
                          <img src="../images/heart.png" />
                          <span className="ml-2">Favorilere Ekle</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      );
    }); */}
 
 
   
  <div className="card mb-3"  >
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="{aktifMenu.menu.item.images[0]['200']} " className="card-img" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      
      </div>
    </div>
  </div>
</div>
  
  
  
  
  
  
  
  </div>
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"> Grid Sayfası </div> 
</div>





    </div>
    </div>
  }
}


$(function() {
  ReactDOM.render(
    <Restaurant/>,
    document.getElementById('react-root')
  );

})
