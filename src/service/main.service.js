function MainService(){
    "ngInject";
    
    let name = 'Varghese';

    return{
        getName(){
            return name;
        },
        setName(_name){
            name = _name;
        },
        getBarchartData(){
            var data = [
            {
                "country":"India",
                "gdp":"20.6"
            },
            {
                country:"Can",
                gdp:40.6
            },
            {
                country:"Norway",
                gdp:60.6
            },
            {
                country:"Newzland",
                gdp:0.6
            },
            {
                country:"Australia",
                gdp:0.6
            },
            {
                country:"united states",
                gdp:20.6
            },{
                country:"china",
                gdp:34.6
            }
            ];
            return data;
        
        },
        getName(){
            return this.name;
        }
    }
    
}
       
export default MainService;