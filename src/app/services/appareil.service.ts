export class AppareilService{
    appareils: any[] = [
        {
          id: 1,
          name: 'Télévision',
          status: 'éteint',
        },
        {
          id: 2,
          name: 'Bécane',
          status: 'allumé',
        },
        {
          id: 3,
          name: 'Téléphone',
          status: 'éteint',
        }
      ];

      getAppareilById(id: number){
        const appareil = this.appareils.find(
          (appareilObject) => {
            return appareilObject.id === id
          }
        )
        return appareil
      }
    
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