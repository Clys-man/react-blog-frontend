import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

import Loading from '../loading'
import Notify from '../notify'
import { changeValue, createPost } from '../../store/actions/home.actions';
import { getTagList } from '../../config/globalConfig';

const BlueCheckbox = withStyles({
    root: {
        color: blue[500],
        '&$checked': {
            color: blue[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;

const StyleButton = withStyles(theme => ({
    root: {
        color: '#fff',
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: blue[600]
        }
    }
}))(Button)


export default () => {
    const { data, sucess, error } = useSelector(state => ({
        data: state.homeReducer.data,
        sucess: state.homeReducer.sucess,
        error: state.homeReducer.error,
    }));

    const dispatch = useDispatch();

    const [tagList, settagList] = useState([]);
    const create = () => {
        dispatch(createPost(data)).then(() => {
            if (sucess) {
                data.title = ''
                data.content = ''
                data.tags = []
            }
        })
    }
    useEffect(() => {
        const loadAll = async () => {
            let list = await getTagList();
            settagList(list.data);

        }
        loadAll();
    }, []);
    return (
        <section className="post-section">
            <Notify />
            <Loading />
            <div class="container">
                <div class="card br">
                    <h4>Criar novo post</h4>
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Título"
                                value={data.title}
                                onChange={(text) => dispatch(changeValue({ title: text.target.value }))}
                            />
                        </div>
                        <div className="col-md-6 d-flex align-items-center mt-md-2">
                            <Autocomplete
                                onChange={(event, value) => {
                                    let arr = data.tags
                                    while (arr.length) {
                                        arr.pop()
                                    }
                                    arr.push(
                                        value.map(item => {
                                            return item.id
                                        }))
                                }}
                                multiple
                                id="checkboxes-tags-demo"
                                options={tagList}
                                disableCloseOnSelect
                                getOptionLabel={(option) => option.title}
                                renderOption={(option, { selected }) => (
                                    <React.Fragment>
                                        <BlueCheckbox
                                            icon={icon}
                                            style={{ marginRight: 8 }}
                                            checked={selected}
                                        />
                                        {option.title}
                                    </React.Fragment>
                                )}
                                style={{ width: '100%' }}
                                renderInput={(params) => (
                                    <TextField {...params} variant="outlined" label="Tags" placeholder="Tags" />
                                )}
                            />
                        </div>
                    </div>
                    <div className="mt-2">
                        <TextField
                            id="outlined-multiline-static"
                            label="Conteúdo"
                            multiline
                            fullWidth
                            rows={4}
                            variant="outlined"
                            value={data.content}
                            onChange={(text) => dispatch(changeValue({ content: text.target.value }))}
                        />
                    </div>
                    <StyleButton
                        type="button"
                        variant="contained"
                        fullWidth
                        color="primary"
                        size="large"
                        className="mb-3 mb-md-4 mt-4"
                        onClick={() => create()}
                    >Criar postagem</StyleButton >
                </div>
            </div>
        </section>
    )
}

