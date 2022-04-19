import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#283D4A",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: "#283D4A",
        color: theme.palette.common.white,
        fontSize: 14,
        width: "5cm",
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        borderTop: "2px solid white",
        borderBottom: "2px solid white",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'sl_no',
        numeric: true,
        disablePadding: true,
        label: 'Slno',

    },
    {
        id: 'business_code',
        numeric: true,
        disablePadding: false,
        label: 'Business_Code',
    },
    {
        id: 'cust_number',
        numeric: true,
        disablePadding: false,
        label: 'Customer_Number',
    },
    {
        id: 'clear_date',
        numeric: true,
        disablePadding: false,
        label: 'Clear_Date',
    },
    {
        id: 'buisness_year',
        numeric: true,
        disablePadding: false,
        label: 'Buisness_Year',
    },
    {
        id: 'doc_id',
        numeric: true,
        disablePadding: false,
        label: 'Document_Id',
    },
    {
        id: 'posting_date',
        numeric: true,
        disablePadding: false,
        label: 'Posting_Date',
    },
    {
        id: 'document_create_date',
        numeric: true,
        disablePadding: true,
        label: 'Document_Create_Date',
    },
    // {
    //     id: 'document_create_date1',
    //     numeric: true,
    //     disablePadding: false,
    //     label: 'Document Create Date1',
    // },
    {
        id: 'due_in_date',
        numeric: true,
        disablePadding: false,
        label: 'Due_Date',
    },
    {
        id: 'invoice_currency',
        numeric: true,
        disablePadding: false,
        label: 'Invoice_Currency',
    },
    {
        id: 'document_type',
        numeric: true,
        disablePadding: false,
        label: 'Document_Type',
    },
    {
        id: 'posting_id',
        numeric: true,
        disablePadding: false,
        label: 'Posting_Id',
    },
    // {
    //     id: 'area_business',
    //     numeric: true,
    //     disablePadding: false,
    //     label: 'Area Business',
    // },
    {
        id: 'total_open_amount',
        numeric: true,
        disablePadding: false,
        label: 'Total_Open_Amount',
    },
    {
        id: 'baseline_create_date',
        numeric: true,
        disablePadding: false,
        label: 'Baseline_Create_Date',
    },
    {
        id: 'cust_payment_terms',
        numeric: true,
        disablePadding: true,
        label: 'Customer_Payment_Terms',
    },
    {
        id: 'invoice_id',
        numeric: true,
        disablePadding: false,
        label: 'Invoice_Id',
    },
    {
        id: 'isOpen',
        numeric: true,
        disablePadding: false,
        label: 'IsOpen',
    },
    {
        id: 'aging_bucket',
        numeric: true,
        disablePadding: false,
        label: 'Aging_Bucket',
    },
    // {
    //     id: 'is_deleted',
    //     numeric: true,
    //     disablePadding: false,
    //     label: 'Is Deleted'
    // }
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <StyledTableCell padding="checkbox">
                    <Checkbox

                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </StyledTableCell>
                {headCells.map((headCell) => (
                    <StyledTableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </StyledTableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

export default function HRCTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setProduct] = useState([])
    const TableData = async () => {
        try {
            const data = await axios.get("http://localhost:8080/WinterInternship/Fetch");
            setProduct(data.data)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        TableData()
    }, []);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.sl_no);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, sl_no) => {
        const selectedIndex = selected.indexOf(sl_no);
        let newSelected = [];
        console.log(sl_no);
        localStorage.setItem("sl_no", sl_no);

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, sl_no);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);


    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;


    return (
        <Box sx={{ width: '100%', mb: 1 }}>
            <Paper sx={{ width: '100%', mb: 1 }}>
                <TableContainer sx={{ height: 300 }} >
                    <Table
                        sx={{ height: 50, minWidth: 750, backgroundColor: '#283D4A' }}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((rows, index) => {
                                    const isItemSelected = isSelected(rows.sl_no);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <StyledTableRow
                                            hover
                                            onClick={(event) => handleClick(event, rows.sl_no)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={rows.sl_no}
                                            selected={isItemSelected}
                                        >
                                            <StyledTableCell padding="checkbox">
                                                <Checkbox
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </StyledTableCell>
                                            <StyledTableCell
                                                component="th"
                                                id={labelId}
                                            >
                                                {rows.sl_no}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{rows.business_code}</StyledTableCell>
                                            <StyledTableCell align="right">{rows.cust_number}</StyledTableCell>
                                            <StyledTableCell align="right">{rows.clear_date}</StyledTableCell>
                                            <StyledTableCell align="right">{rows.buisness_year}</StyledTableCell>
                                            <StyledTableCell align="right">{rows.doc_id}</StyledTableCell>
                                            <StyledTableCell align="right">{rows.posting_date}</StyledTableCell>
                                            <StyledTableCell align="right">{rows.document_create_date}</StyledTableCell>
                                            {/* <StyledTableCell align="right">{rows.document_create_date1}</StyledTableCell> */}
                                            <StyledTableCell align="right">{rows.due_in_date}</StyledTableCell>
                                            <StyledTableCell align="right">{rows.invoice_currency}</StyledTableCell>
                                            <StyledTableCell align="right">{rows.document_type}</StyledTableCell>
                                            <StyledTableCell align="right">{rows.posting_id}</StyledTableCell>
                                            {/* <StyledTableCell align="right">{rows.area_business}</StyledTableCell> */}
                                            <StyledTableCell align="right">{rows.total_open_amount}</StyledTableCell>
                                            <StyledTableCell align="right">{rows.baseline_create_date}</StyledTableCell>
                                            <StyledTableCell align="right">{rows.cust_payment_terms}</StyledTableCell>
                                            <StyledTableCell align="right">{rows.invoice_id}</StyledTableCell>
                                            <StyledTableCell align="right">{rows.isOpen}</StyledTableCell>
                                            <StyledTableCell align='right'>{rows.aging_Bucket}</StyledTableCell>
                                            {/* <StyledTableCell align='right'>{rows.is_deleted}</StyledTableCell> */}
                                        </StyledTableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Table
                    sx={{ minWidth: 750, backgroundColor: '#283D4A' }}
                >
                    <TablePagination
                        rowsPerPageOptions={[5,10,50,100,200,500]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Table>
            </Paper>
        </Box>
    );
}
