export default {
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        { id: 0, download_url: "www.link0.com" },
        { id: 1, download_url: "www.link1.com" },
        { id: 2, download_url: "www.link2.com" }
      ]
    })
  )
};
