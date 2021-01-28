/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import React, { useMemo } from 'react';
import { useTable, useRowSelect } from 'react-table';
import { COLUMNS, DATA } from './columns';
import * as style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import photo from '../../assets/img/photo.png';

const BasicTable = () => {
    const { DivContainer, Table, Title, Thead, Td, ImgDiv, Img, IconWrapper } = style;
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => DATA, []);
    const TableInstance = useTable(
        {
            columns,
            data,
        },
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns) => {
                return [
                    {
                        id: 'img',
                        header: 'Name',
                        Cell: () => (
                            <ImgDiv>
                                <Img src={photo} alt="photo" />
                            </ImgDiv>
                        ),
                    },
                    ...columns,

                    {
                        id: 'edit',
                        header: '',
                        Cell: () => (
                            <div>
                                <IconWrapper>
                                    <FontAwesomeIcon icon={faPen} />
                                </IconWrapper>
                            </div>
                        ),
                    },
                    {
                        id: 'delete',
                        header: '',
                        Cell: () => (
                            <div>
                                <span style={{ color: '#ff6760' }}>
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </span>
                            </div>
                        ),
                    },
                ];
            });
        },
    );
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = TableInstance;
    return (
        <DivContainer>
            <Title>Appointment Activity</Title>
            <Table {...getTableProps()}>
                <thead style={{ border: '1px solid #e8e8e8' }}>
                    {headerGroups.map((headerGroup) => (
                        <tr
                            {...headerGroup.getHeaderGroupProps()}
                            style={{ borderCollapse: 'collapse' }}
                        >
                            {headerGroup.headers.map((column) => (
                                <Thead {...column.getHeaderProps()}>
                                    {column.render('header')}
                                </Thead>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </DivContainer>
    );
};

export default BasicTable;
