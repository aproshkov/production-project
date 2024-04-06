export {
    Profile,
    ProfileSchema,
} from './model/types/profile';

export {
    profileActions,
    profileReducer,
} from './model/slice/profileSlice';

export {
    fetchProfileData,
} from '../Profile/model/services/fetchProfileData';

export {
    ProfileCard,
} from '../Profile/ui/ProfileCard/ProfileCard';
