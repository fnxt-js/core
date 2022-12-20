import {useEffect} from 'preact/hooks';
import data from '../../summary.json';
import './Tree.scss';

const StatsCompact = ({stats}) => {
    const fill = Math.round(stats.pct);
    const empty = 100 - fill;
    return <>
        <div className={'label'}>{stats.covered}/{stats.total} ({Math.round(stats.pct * 100) / 100}%)</div>
        <div className={'chart'+ (stats.total ? '' : ' empty')} style={'--progress: ' + fill}>
            <div className="cover-fill" style={'width: ' + fill + '%'}></div>
            <div className="cover-empty" style={'width: ' + empty + '%'}></div>

        </div>
    </>;
};
const Summary = ({summary, name}) => {

    const pcts = [];
    if (summary.statements.total) {
        pcts.push(summary.statements.pct);
    }
    if (summary.lines.total) {
        pcts.push(summary.lines.pct);
    }
    if (summary.functions.total) {
        pcts.push(summary.functions.pct);
    }
    if (summary.branches.total) {
        pcts.push(summary.branches.pct);
    }

    const min = Math.min(...pcts);

    return <>
        <tr className={'tree-compact' + (summary.statements.total ? '' : ' empty')} style={'--quality: ' + min}>
            <td>{name}</td>
            <td><StatsCompact stats={summary.statements} name={'statements'}></StatsCompact></td>
            <td><StatsCompact stats={summary.lines} name={'lines'}></StatsCompact></td>
            <td><StatsCompact stats={summary.functions} name={'functions'}></StatsCompact></td>
            <td><StatsCompact stats={summary.branches} name={'branches'}></StatsCompact></td>
        </tr>
    </>;
};
const TreeNode = ({data, name, path}) => {
    const nPath = [...path, name];
    return <>
        <Summary summary={data.summary} name={nPath.join('/')}></Summary>

        {Object.entries(data.children).map(([k, v], i) => {
            return v && <TreeNode key={i} data={v} name={k} path={nPath}></TreeNode>;
        })}


    </>;
};
export const Tree = () => {


    useEffect(async () => {
        try {
            const data = await axios.get('http://localhost:3000/core/summary.json');
            console.log(data);
            setPost(data);
        } catch (e) {
            console.log(e);
        }
    }, []);


    return <table className={'cov-table'}>
        <tr>
            <td>path</td>
            <td>statements</td>
            <td>lines</td>
            <td>functions</td>
            <td>branches</td>
        </tr>
        <TreeNode data={data} name={'.'} path={[]}></TreeNode>
    </table>;
};
