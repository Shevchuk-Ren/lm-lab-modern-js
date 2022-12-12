// Instructions can be found in rest_parameters.md

export function add(...props) {
  
  return props.reduce((total, num) => total += num)
}

