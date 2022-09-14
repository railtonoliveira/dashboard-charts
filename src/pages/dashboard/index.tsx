import ChartsContainer from '../../components/ChartsContainer';
import { UserData } from '../../utils/Data';
import { DataProps } from './interface';

const Dashboard = () => {

    const labels: number[] = UserData.map((data: DataProps) => data.year);
    const data: number[] = UserData.map((data: DataProps) => data.userGain);
    const colors: string[] = ['rgba(255, 99, 132, 0.5)', 'rgba(53, 162, 235, 0.5)'];

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' 
        }}>
            <div style={{ width: 700, marginBottom: 50 }}>
                <ChartsContainer 
                    type="Bar"
                    labels={labels}
                    label="Vertical Bar Chart"
                    data={data}
                    colors={colors}
                    title="Bar Chart Example"
                />
            </div>

            <div style={{ width: 700 }}>
                <ChartsContainer 
                    type="Line"
                    labels={labels}
                    label="Line Chart"
                    data={data}
                    colors={colors}
                    title="Line Chart Example"
                />      
            </div>          
        </div>
    )
}

export default Dashboard;