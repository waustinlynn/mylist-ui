import { Injectable } from '@angular/core';
import { DocService } from './doc.service';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(public service: DocService) {

  }
  getAll(docType: string) {
    return this.service.getAll(docType);
  }

  getLatest(docType: string) {
    return this.service.getLatest(docType);
  }

  save(doc: any) {
    return this.service.save(doc);
  }

  delete(docType: string, docId: string) {
    return this.delete(docType, docId);
  }
}
