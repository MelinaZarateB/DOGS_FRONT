const validations = (inputs) => {
    const errors = {}

    const regexName= /^[^\d]+$/
    const regexValueNumberNoNegative = /^\d+$/ 

    if (inputs.name.trim() === "") {
        errors.name = "El nombre es requerido";
      } else {
        if (!regexName.test(inputs.name)) {
          errors.name = "El nombre no puede contener números";
        }
        if (inputs.name.length > 25) {
          errors.name = "El nombre es muy largo";
        }
      }
    if (inputs.min_height.trim() !== "") {
        if(!regexValueNumberNoNegative.test(inputs.min_height)) {
          errors.min_height = "Debe ser un numero entero no negativo";
        } 
      } else {
        errors.min_height = "La altura es requerida";
      }
      if (inputs.max_height.trim() !== "") {
        if(!regexValueNumberNoNegative.test(inputs.max_height)) {
          errors.max_height = "Debe ser un numero entero no negativo";
        } 
      } else {
        errors.max_height = "La altura es requerida";
      }
      if (inputs.min_height !== "" && inputs.max_height !== "") {
        if (parseInt(inputs.max_height) <= parseInt(inputs.min_height)) {
          errors.especial =
            "La altura mínima no puede ser mayor o igual a la altura máxima";
        }
      }

    if (inputs.min_weight !== "") {
        if(!regexValueNumberNoNegative.test(inputs.min_weight)) {
          errors.min_weight = "Debe ser un numero entero no negativo";
        } 
      } else {
        errors.min_weight = "El peso es requerido";
      }
      if (inputs.max_weight !== "") {
        if(!regexValueNumberNoNegative.test(inputs.max_weight)) {
          errors.max_weight = "Debe ser un numero entero no negativo";
        } 
      } else {
        errors.max_weight = "El peso es requerido";
      }
      if (inputs.min_weight !== "" && inputs.max_weight !== "") {
        if (parseInt(inputs.max_weight) <= parseInt(inputs.min_weight)) {
          errors.especial2 =
            "El peso mínimo no puede ser mayor o igual al maximo";
        }
      }

      const lifeSpanValue = inputs.life_span.trim();
      if (lifeSpanValue === '') {
        errors.life_span = 'Los años son requeridos';
      } else if (!regexValueNumberNoNegative.test(lifeSpanValue)) {
        errors.life_span = 'Debe ser un número entero no negativo';
      } else if (lifeSpanValue > 25) {
        errors.life_span = 'No puede ser mayor a 25 años';
      }
        return errors;
      }
export default validations;

    


