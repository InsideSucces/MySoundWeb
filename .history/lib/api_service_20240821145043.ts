import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

class ApiService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: "https://your-api-url.com",
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.instance.interceptors.request.use(
      (config) => {
        // Add any request interceptors here
        return config;
      },
      (error) => {
        // Handle request errors here
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      (response) => {
        // Add any response interceptors here
        return response;
      },
      (error) => {
        // Handle response errors here
        return Promise.reject(error);
      }
    );
  }

  public async get(url: string): Promise<AxiosResponse> {
    try {
      const response = await this.instance.get(url);
      return response;
    } catch (error) {
      this.handleError(error);
    }
  }

  public async post(url: string, data: any): Promise<AxiosResponse> {
    try {
      const response = await this.instance.post(url, data);
      return response;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Add other methods (put, delete, etc.) as needed

  private handleError(error: AxiosError) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(error.response.data);
      console.error(error.response.status);
      console.error(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error", error.message);
    }
    console.error(error.config);
  }
}

export default new ApiService();
