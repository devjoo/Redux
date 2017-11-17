import React, { Component } from 'react';  // React 변수 참조하지 않았어도 항상 인클루드한다

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = { term : '' }
    }

    render(){
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({term : event.target.value})} />
            </div>
        );
    }
}

export default SearchBar;   // 에플리케이션의 어떤 곳에서도 이 searchBar를 불러오게 한다


// class 기반 component는 내부적인 정보를 저장하려할때 사용한다