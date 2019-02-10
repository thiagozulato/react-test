import React from 'react';
import query from 'query-string';
import { Link } from 'react-router-dom';

class Account extends React.Component {
    componentDidMount() {
        console.log('did mount Account');
    }
    componentDidUpdate() {
        console.log('did update Account');
    }
    componentWillUnmount() {
        console.log('will unmount Account');
    }
    
    render() {
        const params = query.parse(this.props.location.search);
        const layouts = ['sp','eb','fx','tr'];
        const history = [{
            layout: 'sp',
            name: 'Teste sp'
        },
        {
            layout: 'eb',
            name: 'Teste eb'
        },
        {
            layout: 'eb',
            name: 'Teste eb 001'
        },
        {
            layout: 'tr',
            name: 'Teste tr'
        },
        {
            layout: 'tr',
            name: 'Teste tr 001'
        }];

        const filter = history.filter(item => item.layout === params.layout);

        return (
            <div>
                <h2>Account page ({params.layout})</h2>
                {
                    layouts.map(layout => <Link to={`${this.props.match.url}?layout=${layout}`}>{`Layout ${layout}`} | </Link>)
                }

                <div className="filter-layout">
                    <ul>
                        {
                            (!filter.length) ? (
                                <li>No filter</li>
                            ) : (
                                filter.map(itemLayout => (
                                    <li>{itemLayout.name}</li>
                                ))
                            )
                        }
                    </ul>
                </div>         
            </div>            
        )
    }
};

export default Account;