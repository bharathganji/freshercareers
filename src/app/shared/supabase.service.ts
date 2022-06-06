import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { jobData } from '../classes/jobData';
import { initsupabase } from '../utils/initsupabase';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  supabase: SupabaseClient = createClient(
    initsupabase.SUPABASE_URL,
    initsupabase.SUPABASE_KEY
  );
  data!: jobData[];
  constructor() {}

  readonly fetchDummy = async () => {
    console.log('called fetch dummy');

    let { data, error } = await this.supabase.from('jobData').select('*');

    this.data = data!;
    return data;
  };
  fetchByID = async (param: any) => {
    let { data, error } = await this.supabase
      .from('jobData')
      .select('*')
      .eq('id', param);
    this.data = data!;
    return data;
  };

  getdata() {
    return this.data;
  }
  searchPostsArray!: jobData[];
  searchFilter = (QueryParams: string[]) => {
    this.fetchDummy()
      .then((response: any) =>
        response.forEach((element: any) => {
          console.log(Object.values(element));
        })
      )
      .catch((e) => alert(e));
    // Object.values(obj).forEach((ele) => this.contains(ele, QueryParams));
    // return this.searchPostsArray;
  };
  contains = (str: any, QueryParams: string[]) => {
    QueryParams.some((element: any) => {
      if (str.includes(element)) {
        this.searchPostsArray.push(element);
      } else console.log('no');
    });
  };

  // searchFilter = async (param: any) => {
  //   let { data, error } = await this.supabase
  //     .from('jobData')
  //     .select('*')
  //     .textSearch('title',param)
  //   console.log(data);
  //   // this.data = data!;
  //   // return data;
  // };
}
