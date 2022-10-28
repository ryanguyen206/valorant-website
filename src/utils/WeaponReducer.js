export const WeaponReducer = (state, action) => {
  switch(action.type)  {
    case "smgs":
      return {smgs:true,
        heavies:false,
        snipers:false,
        melee:false,
        rifles:false, 
        sidearms:false};
    case "heavies":
        return {smgs:false,
            heavies:true,
            snipers:false,
            melee:false,
            rifles:false, 
            sidearms:false};
    case "snipers":
            return {smgs:false,
                heavies:false,
                snipers:true,
                melee:false,
                rifles:false, 
                sidearms:false};
case "melee":
            return {smgs:false,
                        heavies:false,
                        snipers:false,
                        melee:true,
                        rifles:false, 
                        sidearms:false};
     case "rifles":
    return {smgs:false,
                heavies:false,
                snipers:false,
                melee:false,
                rifles:true, 
                sidearms:false};
    case "sidearms":
        return {smgs:false, heavies:false,  snipers:false, melee:false,rifles:false, sidearms:true};
    default:
        return state
}
}