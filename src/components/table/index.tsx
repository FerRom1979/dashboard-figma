import React from 'react';
import * as style from './style';
import Materialtable from 'material-table';
import tableIcons from './icons';
import { Edit, Delete } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Table = () => {
    const { DivContainer, SpanIcon } = style;
    const columns: any = [
        {
            title: 'Name',
            field: 'icon',
        },
        {
            title: '',
            field: 'name',
        },
        {
            title: 'Email',
            field: 'email',
        },
        {
            title: 'Date',
            field: 'date',
        },
        {
            title: 'Visit Time',
            field: 'visit',
        },
        {
            title: 'Doctor',
            field: 'doctor',
        },
        {
            title: 'Conditions',
            field: 'conditions',
        },
    ];
    const data: any = [
        {
            icon: (
                <SpanIcon>
                    <FontAwesomeIcon icon={faUser} />
                </SpanIcon>
            ),
            name: 'Leslie Alexander',
            email: 'lesie.alexander@example.com',
            date: '10/10/20',
            visit: '09:15-09:45am',
            doctor: 'Dr.Jacob Jones',
            conditions: 'Mumps Stage ||',
        },
        {
            icon: (
                <SpanIcon>
                    <FontAwesomeIcon icon={faUser} />
                </SpanIcon>
            ),
            name: 'Leslie Alexander',
            email: 'lesie.alexander@example.com',
            date: '10/10/20',
            visit: '09:15-09:45am',
            doctor: 'Dr.Jacob Jones',
            conditions: 'Mumps Stage ||',
        },
        {
            icon: (
                <SpanIcon>
                    <FontAwesomeIcon icon={faUser} />
                </SpanIcon>
            ),
            name: 'Laslie Alexander',
            email: 'lesie.alexander@example.com',
            date: '10/10/20',
            visit: '09:15-09:45am',
            doctor: 'Dr.Jacob Jones',
            conditions: 'Mumps Stage ||',
        },
        {
            icon: (
                <SpanIcon>
                    <FontAwesomeIcon icon={faUser} />
                </SpanIcon>
            ),
            name: 'Leslie Alexander',
            email: 'lesie.alexander@example.com',
            date: '10/10/20',
            visit: '09:15-09:45am',
            doctor: 'Dr.Jacob Jones',
            conditions: 'Mumps Stage ||',
        },
        {
            icon: (
                <SpanIcon>
                    <FontAwesomeIcon icon={faUser} />
                </SpanIcon>
            ),
            name: 'Leslie Alexander',
            email: 'lesie.alexander@example.com',
            date: '10/10/20',
            visit: '09:15-09:45am',
            doctor: 'Dr.Jacob Jones',
            conditions: 'Mumps Stage ||',
        },
    ];
    return (
        <DivContainer>
            <Materialtable
                columns={columns}
                data={data}
                title="Appointment Activity"
                icons={tableIcons}
                actions={[
                    {
                        icon: Edit,
                        tooltip: 'edit appointment',
                        onClick: (event, rowData: any) => alert(rowData.name),
                    },
                    {
                        icon: Delete,
                        tooltip: 'delete appointment',
                        onClick: (event, rowData: any) =>
                            window.confirm(`are you sure to delete${rowData.name} ?`),
                    },
                ]}
                options={{
                    paging: false,
                    search: false,
                    actionsColumnIndex: -1,
                    sorting: true,
                    headerStyle: {
                        background: '#E8E8E8',
                        /* opacity: 0.2, */
                        color: ' #25282B',
                        fontFamily: 'Lato',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontSize: 14,
                    },
                    actionsCellStyle: {
                        color: 'red',
                    },
                }}
                localization={{
                    header: {
                        actions: '',
                    },
                }}
            />
        </DivContainer>
    );
};

export default Table;
