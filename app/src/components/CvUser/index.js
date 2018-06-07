/**
 * NPM import
 */
import React from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';
import anime from 'animejs';
import classNames from 'classnames';
/**
 * Local import
 */

// import ProfileBloc from 'src/components/CvUser/ProfileBloc';
// import SkillBloc from 'src/components/CvUser/SkillBloc';
import GraduationBloc from 'src/components/CvUser/GraduationBloc';
import ExperienceBloc from 'src/components/CvUser/ExperienceBloc';
import FormTestAdd from 'src/components/CvUser/FormTestAdd';
/**
 * Code
 */
class CvUser extends React.Component {
  state = {
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
    toggle: false,
  }

  toggleAbstractG = id => () => {
    // Récupérer la liste des graduations
    const graduations = this.state.graduations.map((graduation) => {
      // Cibler la tache dont l'id est reçu
      if (graduation.id === id) {
        // Inverser la valeur
        return {
          // id: graduation.id,
          // label: graduation.label,
          ...graduation,
          active: !graduation.active,
        };
      }
      return graduation;
    });
    // Modifier le state avec la Copie
    this.setState({ graduations });
  }
  toggleAbstractX = id => () => {
    const experiences = this.state.experiences.map((experience) => {
      // Cibler la tache dont l'id est reçu
      if (experience.id === id) {
        // Inverser la valeur
        return {
          // id: experience.id,
          // label: experience.label,
          ...experience,
          active: !experience.active,
        };
      }
      return experience;
    });
    // Modifier le state avec la Copie
    this.setState({ experiences });
  }
  togglePanel = () => {
    this.setState({ toggle: !this.state.toggle });
  }

  addGraduationBloc = () => {
    // Je créé un tableau avec toutes les ids
    const allIds = this.state.graduations.map(graduation => graduation.id);

    // Je calcule le prochain ID en prenant la plus haute et en ajoutant 1
    const newId = Math.max(...allIds) + 1;

    // Il y a bien moins verbeux pour ce qui va suivre mais là j'ai ça en tête
    // et pour le moment c'est plus rapide pour moi

    const inputE = document.getElementsByClassName('entitled');
    const newEntitled = inputE.value;

    const inputY = document.getElementsByClassName('year');
    const newYear = inputY.value;

    const inputA = document.getElementsByClassName('abstract');
    const newAbstract = inputA.value;

    // Creer une tache et la remplir, pour le test
    const newGraduation = {
      id: newId,
      entitled: newEntitled,
      year: newYear,
      abstract: newAbstract,
      active: false,
    };

    const graduations = [...this.state.graduations, newGraduation];

    // Modifier le state
    this.setState({ graduations });
  }

  addExperienceBloc = () => {
    // Je créé un tableau avec toutes les ids
    const allIds = this.state.experiences.map(experience => experience.id);

    // Je calcule le prochain ID en prenant la plus haute et en ajoutant 1
    const newId = Math.max(...allIds) + 1;

    // je prends l'element du DOM, temporaire
    // const input = document.getElementById('todo-input');
    // const label = input.value;

    // Creer une tache et la remplir, pour le test
    const newExperience = {
      id: newId,
      entitled: 'New Experience',
      year: '2018',
      abstract: 'Completely new amazing bloc with amazing text',
      active: false,
    };

    const experiences = [...this.state.experiences, newExperience];

    // Modifier le state
    this.setState({ experiences });
  }

  render() {
    const togglePanelClass = classNames(
      { 'toggle-panel': this.state.toggle },
    );
    return (
      <div>
        <div id="cv-builder-form" className={togglePanelClass}>
          <div id="panel-toggler"  onClick={this.togglePanel}><i className="fas fa-angle-left" /></div>
          <FormTestAdd onAddGraduationBloc={this.addGraduationBloc} className={togglePanelClass} />
          {/* <button onClick={this.addGraduationBloc} className="button-add">Add graduation</button> */}
          <button onClick={this.addExperienceBloc} className="button-add">Add experience</button>
        </div>
        <div id="cv-user">
          {/* <ProfileBloc /> */}
          <GraduationBloc
            graduations={this.state.graduations}
            onToggleAbstract={this.toggleAbstractG}
          />
          <ExperienceBloc
            experiences={this.state.experiences}
            onToggleAbstract={this.toggleAbstractX}
          />
        </div>
      </div>

    );
  }
}

/**
 * Export
 */
export default CvUser;
