import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';
import { Fragment, useState } from 'react';

const AddEducation = ({ history, addEducation }) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        to: '',
        from: '',
        current: false,
        description: '',
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const { school, degree, fieldofstudy, to, from, current, description } =
        formData;

    const onChange = (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    return (
        <Fragment>
            <section className='container'>
                <h1 className='large text-primary'>Add Your Education</h1>
                <p className='lead'>
                    <i className='fas fa-code-branch'></i> Add any school or
                    bootcamp that you have attended
                </p>
                <small>* = required field</small>
                <form
                    className='form'
                    onSubmit={(e) => {
                        e.preventDefault();
                        addEducation(formData, history);
                    }}
                >
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='* School or bootcamp'
                            name='school'
                            required
                            value={school}
                            onChange={(e) => onChange(e)}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='* Degree or certificate'
                            name='degree'
                            value={degree}
                            onChange={(e) => onChange(e)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Field of study'
                            name='fieldofstudy'
                            value={fieldofstudy}
                            onChange={(e) => onChange(e)}
                        />
                    </div>
                    <div className='form-group'>
                        <h4>From Date</h4>
                        <input
                            type='date'
                            name='from'
                            value={from}
                            onChange={(e) => onChange(e)}
                        />
                    </div>
                    <div className='form-group'>
                        <p>
                            <input
                                type='checkbox'
                                name='current'
                                checked={current}
                                value={current}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        current: !current,
                                    });
                                    toggleDisabled(!toDateDisabled);
                                }}
                            />{' '}
                            Current Job
                        </p>
                    </div>
                    <div className='form-group'>
                        <h4>To Date</h4>
                        <input
                            type='date'
                            name='to'
                            disabled={toDateDisabled ? 'disabled' : ''}
                            value={to}
                            onChange={(e) => onChange(e)}
                        />
                    </div>
                    <div className='form-group'>
                        <textarea
                            name='description'
                            cols='30'
                            rows='5'
                            placeholder='Program Description'
                            value={description}
                            onChange={(e) => onChange(e)}
                        ></textarea>
                    </div>
                    <input
                        type='submit'
                        className='btn btn-primary my-1'
                        value='Submit'
                    />
                    <a className='btn btn-light my-1' href='dashboard.html'>
                        Go Back
                    </a>
                </form>
            </section>
        </Fragment>
    );
};

AddEducation.propTypes = {
    history: PropTypes.object.isRequired,
    AddEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(withRouter(AddEducation));
