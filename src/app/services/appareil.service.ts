export class AppareilService{
    appareils = [
        {
          name: 'Télévision',
          status: 'éteint',
        },
        {
          name: 'Bécane',
          status: 'allumé',
        },
        {
          name: 'Téléphone',
          status: 'éteint',
        }
      ];

    
    OnTarget(){
        for (let appareil of this.appareils){
            appareil.status = 'allumé'
        }
    }

    OffTarget(){
        for (let appareil of this.appareils){
            appareil.status = 'éteint'
        }
    }
}