import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(person: any): string {
    if (person.gender === 'male') {
      return `MR ${person.name}`;
    } else {
      return `MS ${person.name}`;
    }
  }

  // შევქმნათ pipe, რომელსაც გადაეცემა სტრინგი, და თუ სტრინგის length არის 15-ზე მეტი, მოვჭრათ
  // სტრინგი და ბოლოში ... მივამატოთ. 
  // 22 ... 

}
