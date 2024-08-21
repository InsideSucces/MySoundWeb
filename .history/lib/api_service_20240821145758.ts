import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

class ApiService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: "http://185.158.107.161:3000",
      timeout: 50000,
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

  public async get(url: string, headers?: any): Promise<AxiosResponse> {
    try {
      return await this.instance.get(url, { headers });
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  public async post(url: string, data: any): Promise<AxiosResponse> {
    try {
      return await this.instance.post(url, data);
    } catch (error) {
      this.handleError(error)throw error;
    }
  }

  // Add other methods (put, delete, etc.) as needed

  private handleError(error: AxiosError) {
    if (error.response) {
      // The request was made and the server responded with a status code
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
