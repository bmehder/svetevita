<script>
  export let src = 'https://picsum.photos/200/300'
  export let title = 'Default Title'
  export let content =
    '<strong>DEFAULT TEXT</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor doloremque veniam aliquid libero, optio harum ad laboriosam molestiae nisi? Deserunt, nulla harum dolorem, quam incidunt non unde ipsam facere, vero autem ea!'
</script>

<article on:click={e => alert(e.target)}>
  <img {src} alt={title} />
  <div>
    <h1>{@html title}</h1>
    <p>{@html content}</p>
  </div>
</article>

<style>
  article {
    width: 300px;
    line-height: 1.5em;
    border-radius: 0.25em;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
  div {
    padding: 1rem 2rem 2rem;
  }
  h1 {
    text-align: center;
  }
</style>
