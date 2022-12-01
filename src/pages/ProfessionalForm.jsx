import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { professionalFormSubmit } from '../redux/actions';

import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculum: '',
      job: '',
      description: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  onSubmitHandle = () => {
    const { dispatch, history } = this.props;
    dispatch(professionalFormSubmit(this.state));
    history.push('/formdisplay');
  };

  render() {
    const { curriculum, job, description } = this.state;
    return (
      <form
        onSubmit={ () => console.log('Envia as informações para a store') }
      >
        <h1 className="title">Informações Profissionais</h1>
        <div className="container profession">
          <TextArea
            label="Resumo do currículo: "
            value={ curriculum }
            name="curriculum"
            maxLength="1000"
            onChange={ this.handleChange }
            required
          />
          <Input
            label="Cargo:"
            name="job"
            type="text"
            value={ job }
            onChange={ this.handleChange }
            required
          />
          <TextArea
            label="Descrição do cargo: "
            name="description"
            maxLength="500"
            onChange={ this.handleChange }
            value={ description }
            required
          />
        </div>
        <Button
          type="submit"
          label="Enviar"
          moreClasses="is-fullwidth is-info"
          onClick={ this.onSubmitHandle }
        />
      </form>
    );
  }
}

ProfessionalForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(ProfessionalForm);
