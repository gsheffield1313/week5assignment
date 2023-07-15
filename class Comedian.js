//added class here
class Comedian {
    constructor(name,style){
        this.name = name;
        this.style = style;
    }
//used describe method
    describe(){
        return `$(this.name) does comedy in this style ${this.style}.`;
    }
}

class Club{
    constructor (name){
        this.name = name;
        this.comedians =[];
    }

    addComedian(_comedians){
if(comedians instanceof Comedian){
    this.comedians.push(comedians);
} else{
    throw new Error('You can only add an instance of Comedian. Argument is not a comedian: ${_comedians}');
}
    }

    describe(){
        return '${this.name} has ${this.comedians.length} comedians.';
        }
    }
//array set to push club names into
    class Menu {
        constructor(){
            this.clubs = [];
            this.selectedClub = null;
        }

        start(){
            let selection = this.showMainMenuOptions();
            while(selection != 0) {
                switch(selection){
                    case '1':
                        this.createClub();
                        break;
                        case '2':
                            this.viewClub();
                            case '3':
                                this.deleteClub();
                                break;
                                case '4':
                                    this.displayClubs();
                                    break;
                                    default:
                                        selection = 0;
                }
                selection = this.showMainMenuOptions();
            }



            alert('No club my boy!');
        }
//made menu options for enduser. shows error but works in html
        showMainMenuOptions(){
            return prompt(`
            0) exit
            1) create new club
            2) view club
            3) delete club
            4) display all clubs
            `);
        }

        showClubMenuOptions(clubInfo){
            return prompt(`
            0) back
            1) create comedian
            2) delete comedian 
            -------------------
            ${clubInfo}
            `);
        }

        displayClubs(){
            let clubString = '';
            for( let i =0;i < this.clubs.length; i++){
                clubString += i +') ' + this.clubs[i].name + '\n';
            }
            alert(clubString);
        }

        createClub(){
            let name= prompt('Enter name for new club:');
            this.clubs.push(new Club(name));
        }

    viewClub(){
        let index = prompt('Enter the index of the club you wish to view');
if (index > -1 && index < this.clubs.length){
this.selectedClub = this.clubs[index];
let description = 'Club Name: ' + this.selectedClub.name + '\n';

for(let i = 0; i < this.selectedClub.comedians.length; i++){
    description += i + ') ' + this.selectedClub.comedians[i].name 
    + ' - ' +this.selectedClub.comedians[i].style + '\n';
}

let selection = this.showClubMenuOptions(description);
switch (selection){
    case '1':
        this.createComedian();
        break;
        case '2':
            this.deleteComedian();
        }
    }
    
}
deleteClub(){
    let index = prompt('Enter the index of the club you wish to delete:');
    if (index > -1 && index < this.clubs.length) {
        this.teams.splice(index, 1);
        
    }
}



//adding method
createComedian(){
    let name = prompt(`Enter name for new comedian:`);
    let style = prompt(`Enter style for new comedian:`);
    this.selectedClub.comedians.push(new Comedian(name,style));
}

deleteComedian(){
    let index = prompt(`Enter the index of the comedian you wish to delete:`);
    if (index > -1 && index < this.selectedClub.comedians.length) {
        this.selectedClub.comedians.splice(index,1);
    }
}
}
//made the app go 
let menu = new Menu();
menu.start();