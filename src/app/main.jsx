
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { GridPDFExport } from '@progress/kendo-react-pdf';
import { data } from './data';

class App extends React.Component {
    gridPDFExport;

    render() {
        const grid = (
            <Grid
                data={[ ...data ]}
            >
                <Column field="letter" title="Name" />
            </Grid>
        );

        return (
            <div>
                <button onClick={this.exportPDF}>Export</button>
                {grid}
                <GridPDFExport
                    ref={pdfExport => this.gridPDFExport = pdfExport}
                >
                    {grid}
                </GridPDFExport>
            </div>
        );
    }

    exportPDF = () => this.gridPDFExport.save(data);
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);

