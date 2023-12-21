import { Box, CssBaseline, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Atributo from "../interface/Atributo";

function Atributos({ atributos, saldoPontos }: { atributos: Atributo[], saldoPontos: number }) {
    function atributosToRows(atributos: Atributo[]) {
        let rows: any[] = []
        atributos.map(atributo => {
            rows.push({ id: atributo.nome, ...atributo, efeito: atributo.efeito(atributo.base, atributo.bonus), calcularEfeito: atributo.efeito })
        })
        return rows
    }

    function handleAtributoChange(newRow: any, oldRow: any) {
        // console.log(newRow)
        // console.log(oldRow)
        let diff = 0
        if (newRow.base != oldRow.base) { // se o valor base mudar, vai calcular a diferença
            diff = oldRow.base - newRow.base
        }
        saldoPontos += diff
        if (saldoPontos < 0) { // vai anular as modicações no saldoPontos e 
            console.log('não tem pontos o suficiente')
            saldoPontos -= diff
            return {
                ...newRow,
                base: oldRow.base,
                efeito: newRow.calcularEfeito(oldRow.base, newRow.bonus)
            }
        } else {
            console.log('tem pontos o suficiente')
            return {
                ...newRow,
                efeito: newRow.calcularEfeito(newRow.base, newRow.bonus)
            }
        }
    }

    function handleAtributoChangeError(error: any) {
        console.log(error)
    }

    const columns: GridColDef[] = [
        { field: 'label', headerName: 'Atributo', width: 100, sortable: false },
        { field: 'base', headerName: 'Valor', type: 'number', sortable: false, editable: true, width: 75, align: 'center', headerAlign: 'right' },
        { field: 'bonus', headerName: 'Bônus', type: 'number', sortable: false, editable: true, width: 75, align: 'center', headerAlign: 'right' },
        { field: 'efeito', headerName: 'Efeito', sortable: false, width: 100, align: 'right', headerAlign: 'right' }
    ];

    let rows: GridRowsProp[] = atributosToRows(atributos)

    return (
        <Box margin={2} maxWidth={'40vw'} >
            <CssBaseline />
            <Box>
                <Typography component="h1" variant="h5">
                    Atributos
                </Typography>
                <DataGrid
                    columns={columns}
                    rows={rows}
                    editMode="row"
                    hideFooter
                    disableColumnMenu
                    processRowUpdate={handleAtributoChange}
                    onProcessRowUpdateError={handleAtributoChangeError}
                />
            </Box>
        </Box>
    )
}
export default Atributos