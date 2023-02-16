import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export function formatCurrency(value: number){
    return new Intl.NumberFormat(
      'pt-br',
      { style: 'currency', currency: 'BRL' }
    ).format(value);
  }