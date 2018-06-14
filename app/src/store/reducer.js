/**
 * InitialState
 */
const initialState = {
  firstname: '',
  lastname: '',
  birthday: '',
  adress: '',
  mail: '',
  phone: '',
  urlPicture: 'https://picsum.photos/200/300/?random',
  gradEntitled: '',
  gradYear: '',
  gradAbstract: '',
  expEntitled: '',
  expYear: '',
  expAbstract: '',
  togglePanel: false,
  profile: {
    firstname: '',
    lastname: '',
    birthday: '',
    adress: '',
    mail: '',
    phone: '',
    urlPicture: 'https://picsum.photos/200/300/?random',
  },
  graduations: [
    {
      id: 1,
      entitled: 'L3 Webdesigner',
      year: '2013',
      abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus pariatur, veniam rem, assumenda expedita quo. Ratione quo eaque saepe aut, accusamus ipsum. Praesentium, reiciendis aliquam excepturi corporis expedita veritatis, dicta.',
      active: false,
    },
    {
      id: 2,
      entitled: 'HND in Graphic Design',
      year: '2012',
      abstract: 'Design print, typographie, illustration...',
      active: false,
    },
  ],
  experiences: [
    {
      id: 1,
      entitled: 'Graphiste Freelance',
      year: '2014-today',
      abstract: 'Création d\'emailings, de bannières web, logo...',
      active: false,
    },
    {
      id: 2,
      entitled: 'Graphiste Web',
      year: '2012-2014',
      abstract: 'Alternance chez Nexity',
      active: false,
    },
    {
      id: 3,
      entitled: 'Graphiste Print',
      year: '2012',
      abstract: 'Stage agence Coup d\'Ouest (Nouvelle-Calédonie)',
      active: false,
    },
    {
      id: 4,
      entitled: 'Manager',
      year: '2010-2012',
      abstract: 'Restauration événementielle',
      active: false,
    },
  ],
};

/**
 * Reducer
 */
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const ADD_GRAD_BLOC = 'ADD_GRAD_BLOC';
export const ADD_EXP_BLOC = 'ADD_EXP_BLOC';
export const TOGGLE_GRAD = 'TOGGLE_GRAD';
export const TOGGLE_EXP = 'TOGGLE_EXP';
export const TOGGLE_PANEL = 'TOGGLE_PANEL';
export const SAVE_PROFILE = 'SAVE_PROFILE';
export const DELETE_GRAD = 'DELETE_GRAD';
export const DELETE_EXP = 'DELETE_EXP'

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_GRAD_BLOC: {
      // Je créé un tableau avec toutes les ids
      const allIds = state.graduations.map(graduation => graduation.id);

      // Je calcule le prochain ID en prenant la plus haute et en ajoutant 1
      const newId = Math.max(...allIds) + 1;

      // Creer une tache et la remplir, pour le test
      const newGraduation = {
        id: newId,
        entitled: state.gradEntitled,
        year: state.gradYear,
        abstract: state.gradAbstract,
        active: false,
      };

      const graduations = [...state.graduations, newGraduation];

      return {
        ...state,
        graduations,
        gradEntitled: '',
        gradYear: '',
        gradAbstract: '',
      };
    }

    case ADD_EXP_BLOC: {
      // Je créé un tableau avec toutes les ids
      const allIds = state.experiences.map(experience => experience.id);

      // Je calcule le prochain ID en prenant la plus haute et en ajoutant 1
      const newId = Math.max(...allIds) + 1;

      // Creer une tache et la remplir, pour le test
      const newExperience = {
        id: newId,
        entitled: state.expEntitled,
        year: state.expYear,
        abstract: state.expAbstract,
        active: false,
      };

      const experiences = [...state.experiences, newExperience];

      return {
        ...state,
        experiences,
        expEntitled: '',
        expYear: '',
        expAbstract: '',
      };
    }

    case SAVE_PROFILE: {
      const profile = {
        firstname: state.firstname,
        lastname: state.lastname,
        birthday: state.birthday,
        adress: state.adress,
        mail: state.mail,
        phone: state.phone,
        urlPicture: state.urlPicture,
      };

      return {
        ...state,
        profile,
        firstname: '',
        lastname: '',
        birthday: '',
        adress: '',
        mail: '',
        phone: '',
        urlPicture: '',
      };
    }

    case TOGGLE_GRAD: {
      // Récupérer la liste des graduations
      const graduations = state.graduations.map((graduation) => {
        // Cibler la tache dont l'id est reçu
        if (graduation.id === action.id) {
          // Inverser la valeur
          return {
            ...graduation,
            active: !graduation.active,
          };
        }
        return graduation;
      });

      return {
        ...state,
        graduations,
      };
    }
    case DELETE_GRAD: {
      // Recup des taches et filtre
      const graduations = state.graduations.filter(graduation => graduation.id !== action.id);
      return {
        ...state,
        graduations,
      };
    }

    case DELETE_EXP: {
      // Recup des taches et filtre
      const experiences = state.experiences.filter(experience => experience.id !== action.id);
      return {
        ...state,
        experiences,
      };
    }

    case TOGGLE_EXP: {
      // Récupérer la liste des graduations
      const experiences = state.experiences.map((experience) => {
        // Cibler la tache dont l'id est reçu
        if (experience.id === action.id) {
          // Inverser la valeur
          return {
            ...experience,
            active: !experience.active,
          };
        }
        return experience;
      });

      return {
        ...state,
        experiences,
      };
    }

    case INPUT_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
      };


    case TOGGLE_PANEL:
      return {
        ...state,
        togglePanel: !state.togglePanel,
      };

    default:
      return state;
  }
};


/**
 * actionCreators
 */
export const inputChange = ({ name, value }) => ({
  type: INPUT_CHANGE,
  name,
  value,
});

export const saveProfile = () => ({
  type: SAVE_PROFILE,
});

export const addGraduationBloc = () => ({
  type: ADD_GRAD_BLOC,
});

export const addExperienceBloc = () => ({
  type: ADD_EXP_BLOC,
});

export const toggleGradAbstract = id => ({
  type: TOGGLE_GRAD,
  id,
});

export const toggleExpAbstract = id => ({
  type: TOGGLE_EXP,
  id,
});

export const deleteGrad = id => ({
  type: DELETE_GRAD,
  id,
});

export const deleteExp = id => ({
  type: DELETE_EXP,
  id,
});

export const togglePanelView = () => ({
  type: TOGGLE_PANEL,
});
/**
 * Export
 */
export default reducer;
