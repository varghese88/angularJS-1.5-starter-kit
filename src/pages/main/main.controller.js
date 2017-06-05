class MainController{
    constructor(mainService){
        "ngInject";
        this.name = '';
        this.mainService = mainService;
    }
    $onInit(){
        
        let str = 'hello vaghese';
        let obj = {};

        for(let i=0;i<str.length;i++){
            let c = str.charAt(i);
            if(obj[c]===undefined){
                obj[c] = 1;
            }
            else{
                obj[c] += 1;
            }
        }
        console.log(obj);
        console.log('job started');
        function longRun(callback){
            //setTimeout(function(){
                var i =0;
                while(i<100000){
                    i++;
                }
                callback();

            //},0);
        }

        longRun(function(){
            console.log('job done');
        })
        
        console.log('call stack completed');
        this.name = this.mainService.getName();
        this.data = this.mainService.getBarchartData();
    }
}
export default MainController;
