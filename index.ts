import { User } from './src/User';
import { Company } from './src/Company';
import { CustomMap } from './src/CustomMap';

const user = new User();
const customMap = new CustomMap('map');


customMap.addUserMarker(user);