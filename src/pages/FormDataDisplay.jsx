import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { personalInfo, professionalInfo } = this.props;
    return (
      <section className="containerData">
        <h1>Dados Enviados</h1>
        <div>
          Nome:
          {' '}
          {personalInfo.name}
        </div>
        <div>
          Email:
          {' '}
          {personalInfo.email}
        </div>
        <div>
          CPF:
          {' '}
          {personalInfo.cpf}
        </div>
        <div>
          Endereço:
          {' '}
          {personalInfo.address}
        </div>
        <div>
          Cidade:
          {' '}
          {personalInfo.city}
        </div>
        <div>
          Estado:
          {' '}
          {personalInfo.uf}
        </div>
        <div>
          Currículo:
          {' '}
          {professionalInfo.curriculum}
        </div>
        <div>
          Cargo:
          {' '}
          {professionalInfo.job}
        </div>
        <div>
          Descrição do cargo:
          {' '}
          {professionalInfo.description}
        </div>
      </section>
    );
  }
}

FormDataDisplay.defaultProps = {
  personalInfo: {},
  professionalInfo: {},
};

FormDataDisplay.propTypes = {
  personalInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    uf: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }),
  professionalInfo: PropTypes.shape({
    description: PropTypes.string.isRequired,
    curriculum: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = (state) => ({
  personalInfo: state.profileReducer.personalInfo,
  professionalInfo: state.profileReducer.professionalInfo,
});

export default connect(mapStateToProps)(FormDataDisplay);
