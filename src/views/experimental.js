import React from 'react';
import superagent from 'superagent';
import {Select, Option} from 'carbon-react/lib/__experimental__/components/select';

const Experimental = () => {
  const [options, setOptions] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      try {
        const res = await superagent.get('/api/options');
        setOptions(res.body['options'])
      } catch (err) {
        console.error(err);
      }
    })()
  }, []);

  return (
    <Select
      ariaLabel="singleSelect"
      filterable
      label=""
      // onBlur={function noRefCheck(){}}
      // onChange={function noRefCheck(){}}
      // onKeyDown={function noRefCheck(){}}
      placeholder=""
      size="medium"
      typeAhead={false}
    >
      {
        options.map((option, index) => {
          return <Option key={ index } text={ option.text } value={ option.value } />
        })
      }
    </Select>
  )
};

export default Experimental;
